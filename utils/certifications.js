import { openLink } from "./methods"
import { getAssetPath } from "./assetPath";

const achievements = {
    heading:  `certifications`,
    list: [
        {
            size: 3,
            title: 'E-Commerce Course Certificate',
            platform: 'Comprehensive course covering digital marketing, online business strategies, customer acquisition, payment processing, and e-commerce platform management.',
            link: 'https://www.coursera.org/account/accomplishments/verify/9HXWUM12KT0L',
            date: 'Completed on May 26, 2025',
            logo: getAssetPath('bitsgoa.jpg'),
            aos: 'zoom-out-left'
        }
    ],
    handleIconClick: openLink
}

export default achievements