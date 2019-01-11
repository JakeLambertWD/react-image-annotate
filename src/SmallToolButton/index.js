// @flow

import React, { createContext, useContext } from "react"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { blue } from "@material-ui/core/colors"

export const SelectedTool = createContext()

export default ({
  id,
  name,
  icon,
  selected,
  togglable
}: {
  id: string,
  name: string,
  icon: any,
  selected?: boolean,
  togglable?: boolean
}) => {
  const { selectedTool, onClickTool } = useContext(SelectedTool)
  selected = selected || selectedTool === id
  return (
    <Tooltip placement="right" title={name}>
      <IconButton
        disabled={!togglable ? selected : undefined}
        aria-label={name}
        onClick={() => onClickTool(id)}
        size="small"
        style={{
          width: 50,
          height: 50,
          margin: 1,
          color: selected ? blue[500] : undefined
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  )
}
