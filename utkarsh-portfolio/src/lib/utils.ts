export const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
};

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
