import React, { useEffect } from 'react';


export const dartPalettes = [
    {
        layer1: '#2b233b', // Dark gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
    {
        layer1: '#431852', // Second dark gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
    {
        layer1: '#594f6a', // Gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
]

const litePalettes = [
    {
        layer1: '#2b233b', // Dark gray purple - Primary theme
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
    {
        layer1: '#431852', // Second dark gray purple - Variation 1
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
    {
        layer1: '#594f6a', // Gray purple - Variation 2
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#7f85ae', // Gray blue
    },
    {
        layer1: '#2b233b', // Dark gray purple
        layer2: '#ffffff', // White
        layer3: '#7f85ae', // Gray blue (swapped for variety)
        layer4: '#999fc9', // Second gray blue
    },
    {
        layer1: '#431852', // Second dark gray purple
        layer2: '#ffffff', // White
        layer3: '#7f85ae', // Gray blue
        layer4: '#999fc9', // Second gray blue
    },
    {
        layer1: '#594f6a', // Gray purple
        layer2: '#ffffff', // White
        layer3: '#7f85ae', // Gray blue
        layer4: '#999fc9', // Second gray blue
    },
    {
        layer1: '#2b233b', // Dark gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#594f6a', // Gray purple (for accent)
    },
    {
        layer1: '#431852', // Second dark gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#594f6a', // Gray purple
    },
    {
        layer1: '#594f6a', // Gray purple
        layer2: '#ffffff', // White
        layer3: '#999fc9', // Second gray blue
        layer4: '#431852', // Second dark gray purple
    },
];

export const getPelettes = () => {
    // if (palettes)
    // return dartPalettes
    return litePalettes
}

function FullPageScroll() {

    const changeColors = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor1', color.layer1);
        root.style.setProperty('--themeColor2', color.layer2);
        root.style.setProperty('--themeColor3', color.layer3);
        root.style.setProperty('--themeColor4', color.layer4);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta?.setAttribute && meta?.content !== color.layer2) {
            meta.setAttribute('content', color.layer2)
        }
    }

    const getColorIndex = () => {
        const height = window.innerHeight;
        const currentLocation = window.pageYOffset;
        const scrollPosition = currentLocation + (height / 2)
        const views = document.getElementsByClassName('view-element');
        let index = 0
        if (!views) return index
        if (scrollPosition < views[0].scrollHeight) return index
        for (let i = 0; i < views.length; i++) {
            const current = views[i]
            const after = views[i + 1]
            if (!after) {
                index = i
                break
            }
            if (scrollPosition > current.offsetTop && scrollPosition < after?.offsetTop) {
                index = i
                break
            }
        }
        return index
    }

    useEffect(() => {
        const scrollColor = () => {
            const index = getColorIndex()
            const pelettes = getPelettes()
            changeColors(pelettes[index] || pelettes[0])
        }

        window.addEventListener("scroll", scrollColor);
        scrollColor()

        return () => {
            window.removeEventListener("scroll", scrollColor);
        }
    }, []);

    return (
        <div />
    )
}



export default FullPageScroll;
