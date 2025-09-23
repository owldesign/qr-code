'use client';

import QRCodeGenerator from './components/QRCodeGenerator';
import {BackgroundBeams} from "@/components/ui/background-beams";
import DecryptedText from "@/components/DecryptedText";

export default function Home() {
    return (
        <div className='relative bg-background'>
            <div className="min-h-screen relative z-10 font-mono">
                <main className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="grid gap-8 lg:gap-12">
                        <div className="text-center space-y-4">

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                                <DecryptedText
                                    animateOn="view"
                                    text="QR Code Generator"
                                    speed={100}
                                    maxIterations={20}
                                    characters="ABCD1234!?"
                                    className="revealed"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Free online QR code generator. Create professional QR codes instantly for websites, URLs, and links. Download in PNG or SVG format with multiple size options. No registration required.
                            </p>

                            <div className="hidden">
                                <h2>Free QR Code Maker - Generate QR Codes Online</h2>
                                <h3>Professional QR Code Generator Tool</h3>
                                <p>Create custom QR codes for your website, business, or personal use. Our free QR code generator supports:</p>
                                <ul>
                                    <li>Website URLs and links</li>
                                    <li>PNG format with transparency</li>
                                    <li>SVG vector format</li>
                                    <li>Multiple sizes (300px to 3000px)</li>
                                    <li>Instant download</li>
                                    <li>Mobile-friendly interface</li>
                                    <li>Dark and light themes</li>
                                </ul>
                                <h4>Why Use Our QR Code Generator?</h4>
                                <p>Best free QR code generator online. Fast, secure, and reliable QR code creation tool for businesses, marketers, and developers. Generate unlimited QR codes without watermarks or registration.</p>
                                <h5>QR Code Generator Features</h5>
                                <p>Professional QR code maker with advanced features: URL validation, real-time preview, multiple download formats, responsive design, and cross-browser compatibility.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-xl">
                                <QRCodeGenerator/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <BackgroundBeams/>
        </div>
    );
}
