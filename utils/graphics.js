import { getAssetPath } from "./assetPath";

const graphics = {
    heading:  `Some Design Works`,
    list: [
        { size: 2, src: getAssetPath('graphics/dailycart4.jpg'), imageAlign: 'top', aos: 'zoom-out-right' },
        { size: 1, src: getAssetPath('graphics/dailycart3.jpg'), imageAlign: 'left', aos: 'zoom-out-left' },
        { size: 1, src: getAssetPath('graphics/dailycart1.jpg'), imageAlign: 'left', aos: 'zoom-out-right' },
        { size: 1, src: getAssetPath('graphics/card.jpg'), imageAlign: 'center', aos: 'zoom-out-down' },
        // { size: 1, src: getAssetPath('graphics/dailycart4.jpg'), imageAlign: '', aos: 'zoom-out-left' },
        { size: 1, src: getAssetPath('graphics/dailycart5.jpg'), imageAlign: 'bottom', aos: 'zoom-out-left' },
        { size: 3, src: getAssetPath('graphics/buildings2.jpg'), imageAlign: 'center', aos: 'zoom-out-up' },
    ]
}

export default graphics