import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'instagram': 'https://www.instagram.com/shardul__1810/',
        'linkedin': 'https://www.linkedin.com/in/narshardul-bhopi-a32b91317',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'narshardulbhopi@gmail.com',
        onClick: () => openLink('mailto:narshardulbhopi@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements