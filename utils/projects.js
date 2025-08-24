import { getAssetPath } from './assetPath';

const projects = {
    heading: `Things I've Worked on`,
    list: [
        {
            image: getAssetPath('projects/agentX.jpeg'),
            label: 'Featured Project',
            title: 'Agent X – Hybrid Casual Detective Game',
            description: 'Designed and developed clean, intuitive 2D UI screens for mobile, including interactive menus and clue layouts. Focused on a flat, mobile-friendly art style to ensure clarity, readability, and smooth user experience. Contributed to creating a visually engaging interface that complements the detective gameplay while maintaining simplicity for hybrid casual players.',
            techs: [
                'Unity',
                'Figma',
                'Photoshop',
                'Premiere Pro',
                'After Effects',
                'Blender',
                'Maya'
            ],
            links: [
                {
                    label: 'Project Docs',
                    url: 'https://www.canva.com/design/DAGpd0UNrc4/mAsYGLUDEj8od30ChamxqA/view?utlId=ha6c69e2b7b'
                },
                {
                    label: 'Gameplay Video',
                    url: 'https://www.canva.com/design/DAGpd5JfT2U/wQeA24WuQznfafSOOLs1sQ/watch'
                }
            ]
        },
        {
            image: getAssetPath('projects/maze.jpeg'),
            label: 'Featured Project',
            title: 'Apartment Escape Level with Critical Path',
            description: 'I designed an apartment escape level built around a critical path, where players must solve puzzles and uncover clues to progress. The experience combines tasks like finding missing book pieces, arranging runes in the correct order, and interpreting environmental hints, all leading toward the final escape through a lift. The design balances exploration, puzzle-solving, and narrative flow, keeping the player engaged as each solved clue brings them closer to freedom.',
            techs: [
                'Unreal Engine 5',
                'Photoshop',
                'Maya',
                'Substance Painter',
                'Substance Designer'
            ],
            links: [
                {
                    label: 'View Project',
                    url: 'https://drive.google.com/file/d/1Y1ZbqY_4P53IKboz5HA01Rg3RqN0J0ad/view'
                }
            ]
        },
        {
            image: getAssetPath('projects/level-design.jpeg'),
            label: 'Featured Project',
            title: 'Beginner Level Design',
            description: 'I designed a beginner-friendly Action-Adventure Platformer level that introduces players to the core pillars of exploration, combat, and platforming. The level uses natural guidance elements like fireflies, paths, and sound cues, while mixing puzzles, enemy encounters, and movement challenges to create an experience that feels both intuitive and rewarding.',
            techs: [
                'Level Design',
                'Game Design',
                'Combat Design',
                'Platforming',
                'Player Experience',
                'Gameplay Balancing'
            ],
            links: [
                {
                    label: 'Gameplay Video',
                    url: 'https://www.canva.com/design/DAGgIWbo3bo/jtBpVbwop09v7zTRQ0PPbA/watch'
                },
                {
                    label: 'Game Document',
                    url: 'https://www.canva.com/design/DAGi_3VDBA0/mZs0ia_wA4fOrJ-pD_ZwIQ/view?utlId=h2a7f98f1f8'
                }
            ]
        }
    ]
}

export default projects;
