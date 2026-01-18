"use client";

import Lottie from "lottie-react";

type Props = {
    animationData: any;
    className?: string;
};

export default function LottieAnimation({ animationData, className }: Props) {
    return (
        <div className={className}>
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
}
