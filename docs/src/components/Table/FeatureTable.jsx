import React from 'react'

function FeatureTable() {
  return (
    <table className="table">
        <thead>
            <tr>
                <td className="td">Name</td>
                <td className="td">Type</td>
                <td className="td">Default</td>
                <td className="td">Description</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="td">dismissible</td>
                <td className="td">Boolean</td>
                <td className="td">True</td>
                <td className="td">This is Description here</td>
            </tr>
            <tr>
                <td className="td">variant</td>
                <td className="td">
                    `primary` | `secondary` | `success` | `danger` | `warning` | `info` | `dark` |
                    `light`
                </td>
                <td className="td">success</td>
                <td className="td">
                    Change the underlying component CSS base class name and modifier class names prefix.
                    This is an escape hatch for working with heavily customized bootstrap css.
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default FeatureTable;