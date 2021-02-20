import React, { ReactElement } from 'react'
import { Viewer, Plugin, PluginOnTextLayerRender } from '@react-pdf-viewer/core'

interface Props {
    path: string
}

const PDF: React.FC<Props> = ({}): ReactElement => {
    const findTextFromCharOffset = (): Plugin => {
        const findText = (e: PluginOnTextLayerRender) => {
            // `e.ele` represents the element containing all text elements in each page
            // Find all text elements
            e.ele
                // `rpv-core-text` is the CSS class of each text element
                .querySelectorAll('.rpv-core-text')
                .forEach((textEle) => {
                    console.log(textEle.textContent)
                })
        }

        return {
            onTextLayerRender: findText,
        }
    }

    // Create new plugin
    const findTextluginInstance = findTextFromCharOffset()

    return (
        <div className="container py-4">
            <Viewer
                fileUrl="/file/example.pdf"
                plugins={[findTextluginInstance]}
            />
        </div>
    )
}

export default PDF
