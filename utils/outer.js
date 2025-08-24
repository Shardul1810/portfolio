import { openLink } from "./methods"

const outer = {
    title1:  `Hello, I'm`,
    title2: 'Narshardul Bhopi,',
    decrypTexts: [
        'A Graphic Designer',
        'A UI/UX Designer',
        'A Game Designer',
        'I design digital experiences',
    ],
    desciption: `A passionate Game Designer and 3D artist dedicated to creating engaging gameplay experiences that captivate and challenge players. My expertise spans designing levels, mechanics, and systems that support compelling narratives and immersive worlds. As a recent game art graduate with experience in layout and environment design, I love crafting immersive worlds by combining strong composition, storytelling, and technical skills. My workflow blends tools like Maya, Unreal Engine, and Photoshop, along with AI-based ideation to explore visual possibilities efficiently. I continuously refine my design approach to craft interactive experiences that are fun, balanced, and player-centric, and I'm excited to contribute to real game projects and collaborate with creative teams.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:narshardulbhopi@gmail.com?subject=Hello')
    }
}

export default outer
