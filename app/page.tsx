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
                                Enter any URL and download in PNG and SVG formats and sizes.
                            </p>
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
