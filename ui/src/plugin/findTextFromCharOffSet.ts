import { PluginOnTextLayerRender } from '@react-pdf-viewer/core'

const findTextFromCharOffSetPlugin = (): Plugin => {
    const findText = (e: PluginOnTextLayerRender) => {
        return
    }

    return {
        //@ts-ignore
        onTextLayerRender: findText,
    }
}

export default findTextFromCharOffSetPlugin
