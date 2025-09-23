'use client';

import {useState, useRef} from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';
import {BorderBeam} from "@/components/ui/border-beam";
import {MagicCard} from "@/components/ui/magic-card";
import {Button} from "@/components/ui/button";
import TargetCursor from "@/components/TargetCursor";
import {Input} from "@/components/ui/input";


type QRFormat = 'png' | 'svg';
type QRSize = 'small' | 'medium' | 'large' | 'huge';

interface SizeConfig {
    name: string;
    size: number;
    previewSize: number;
}

const sizeConfigs: Record<QRSize, SizeConfig> = {
    small: {name: 'Small', size: 300, previewSize: 128},
    medium: {name: 'Medium', size: 600, previewSize: 128},
    large: {name: 'Large', size: 1200, previewSize: 128},
    huge: {name: 'Huge', size: 3000, previewSize: 128}
};

export default function QRCodeGenerator() {
    const [url, setUrl] = useState<string>('');
    const [qrData, setQrData] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [selectedFormat, setSelectedFormat] = useState<QRFormat>('png');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const generateQR = async (): Promise<void> => {
        if (!url.trim()) return;

        setIsGenerating(true);
        try {
            const qrOptions = {
                width: 256,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: selectedFormat === 'png' ? '#00000000' : '#FFFFFF'
                }
            };

            const qrString = await QRCode.toDataURL(url.trim(), qrOptions);
            setQrData(qrString);
        } catch (error) {
            console.error('Error generating QR code:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadQR = async (size: QRSize, format: QRFormat): Promise<void> => {
        if (!url.trim()) return;

        try {
            const sizeConfig = sizeConfigs[size];
            let dataUrl: string;

            if (format === 'svg') {
                const svgString = await QRCode.toString(url.trim(), {
                    type: 'svg',
                    width: sizeConfig.size,
                    margin: 2,
                    color: {
                        dark: '#000000',
                        light: '#FFFFFF'
                    }
                });

                const blob = new Blob([svgString], {type: 'image/svg+xml'});
                dataUrl = URL.createObjectURL(blob);
            } else {
                dataUrl = await QRCode.toDataURL(url.trim(), {
                    width: sizeConfig.size,
                    margin: 2,
                    color: {
                        dark: '#000000',
                        light: '#00000000'
                    }
                });
            }

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `qrcode-${size}-${sizeConfig.size}px.${format}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            if (format === 'svg') {
                URL.revokeObjectURL(dataUrl);
            }
        } catch (error) {
            console.error('Error downloading QR code:', error);
        }
    };

    const isValidUrl = (string: string): boolean => {
        try {
            new URL(string);
            return true;
        } catch {
            return false;
        }
    };


    return (
        <div>

            <div className="w-full space-y-6">
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                />

                <MagicCard
                    gradientColor='262626'
                    className="p-6 border border-border rounded-xl">
                    <div className="space-y-4">
                        <div className="m-0">
                            <Input
                                id="url-input"
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://example.com"
                                className="text-center cursor-target"
                            />
                        </div>

                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            url.trim() && isValidUrl(url.trim())
                                ? 'opacity-100 translate-y-0 scale-100 max-h-20 mt-4'
                                : 'opacity-0 translate-y-4 scale-95 pointer-events-none max-h-0 mt-0'
                        }`}>
                            <Button
                                onClick={generateQR}
                                disabled={!url.trim() || !isValidUrl(url.trim()) || isGenerating}
                                className="relative overflow-hidden w-full cursor-target"
                                size="lg"
                                variant="secondary">
                                {isGenerating ? 'Generating...' : 'Generate QR Code'}

                                <BorderBeam duration={8} size={100} initialOffset={20}/>
                            </Button>
                        </div>
                        {/*</div>*/}
                    </div>
                </MagicCard>

                {qrData && (
                    <MagicCard
                        gradientColor='262626'
                        className="p-6 border border-border rounded-xl">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                                    <h3 className="text-lg font-medium text-foreground mb-4">Preview</h3>
                                    <div className="p-6 bg-background border border-border rounded-lg dark:bg-gray-100 cursor-target">
                                        <Image
                                            src={qrData}
                                            alt="Generated QR Code"
                                            width={128}
                                            height={128}
                                            className="w-32 h-32"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-3">Format</label>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setSelectedFormat('png')}
                                                className={`flex-1 px-4 py-3 font-medium cursor-target rounded-lg hover:rounded-none transition-all ${
                                                    selectedFormat === 'png'
                                                        ? 'bg-purple-500 text-primary-foreground'
                                                        : 'bg-secondary text-secondary-foreground hover:bg-gray-200 dark:hover:bg-background border border-border'
                                                }`}
                                            >
                                                PNG
                                            </button>
                                            <button
                                                onClick={() => setSelectedFormat('svg')}
                                                className={`flex-1 px-4 py-3 font-medium cursor-target rounded-lg hover:rounded-none transition-all ${
                                                    selectedFormat === 'svg'
                                                        ? 'bg-purple-500 text-primary-foreground'
                                                        : 'bg-secondary text-secondary-foreground hover:bg-gray-200 dark:hover:bg-background border border-border'
                                                }`}
                                            >
                                                SVG
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {(Object.keys(sizeConfigs) as QRSize[]).map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => downloadQR(size, selectedFormat)}
                                                    className="cursor-target px-4 py-3 bg-accent hover:bg-gray-200 dark:hover:bg-background border border-border text-accent-foreground font-medium text-center rounded-lg hover:rounded-none transition-all"
                                                >
                                                    <div className="text-sm font-medium">{sizeConfigs[size].name} <span className="text-xs">{sizeConfigs[size].size}×{sizeConfigs[size].size}</span></div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </MagicCard>
                )}

                <canvas ref={canvasRef} style={{display: 'none'}}/>
            </div>
        </div>
    );
}