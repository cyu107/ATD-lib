import React, { useState, ReactElement } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Accordion from 'components/Accordion'

const AccordionExample = (): ReactElement => {
  const [toggled, setToggled] = useState(false)
  return (
    <Accordion
      iconSize={32}
      panels={[
        {
          title: (
            <div>
              <Checkbox
                name="test"
                checked={toggled}
                onChange={() => setToggled(!toggled)}
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
              />
              <span>Title 1</span>
            </div>
          ),
          content: <div>this is content</div>,
        },
        {
          title: <span>Title 2</span>,
          content: <div>this is content</div>,
        },
        {
          title: <span>Title 3</span>,
          content: <div>this is content</div>,
        },
      ]}
    />
  )
}

export default AccordionExample
