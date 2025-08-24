import { openLink, scrollTo } from "./methods";
import { getAssetPath } from "./assetPath";

const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'My Selft', id: 'my-self' },
        { title: 'Education', id: 'education' },
        { title: 'My Work', id: 'my-work' },
        { title: 'Certifications', id: 'certifications' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Curriculum Vitae | CV',
        onClick: () => openLink(getAssetPath('cv.pdf'))
    },
    logo: {
        src: getAssetPath('photo-logo.JPG'), // Use getAssetPath utility for proper path resolution
        alt: 'narshardulbhopi'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header