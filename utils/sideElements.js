import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/vivekdevkar123',
        'instagram': 'https://www.instagram.com/vivekdevkar123/',
        'twitter': 'https://twitter.com/vivekdevkar123',
        'linkedin': 'https://www.linkedin.com/in/vivekdevkar123/',
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