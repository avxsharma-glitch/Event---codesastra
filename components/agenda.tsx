import {TextEffect} from "@/components/motion-primitives/text-effect";
import React from "react";
import {transitionVariants} from "@/lib/utils";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";

export default function Agenda() {
    return (
        <section id="schedule" className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
                    <div className="text-center lg:text-left">
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2"
                            className="mb-4 text-3xl font-semibold md:text-4xl">
                            Three Days. Different Challenges.
                        </TextEffect>
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.3}
                            as="p"
                            className="text-muted-foreground">
                            Plan your participation around each event's format and time limit. Final start times and venue details are announced by the organizers.
                        </TextEffect>
                    </div>

                    <AnimatedGroup
                        triggerOnView
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0"
                    >
                        <div className="pb-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Day 01</span>
                                <span>Skills & Debugging</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Tech Quiz · Syntax Shock · Debug</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Day 02</span>
                                <span>Build, Identify & Compete</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Hacktober Hackathon · Who Am I? · Tech Trials · Blind Coding · Bug Bounty</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Day 03</span>
                                <span>Resume Roaster</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Team presentations judged on creativity, humor, originality, and presentation.</p>
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}
