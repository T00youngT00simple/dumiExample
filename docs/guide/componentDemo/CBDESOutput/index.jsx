import { Button } from 'antd'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

const CBDESOutput = forwardRef((props, ref) => {
  const terminal = useRef()
  const term = useRef()
  const fitAddon = useRef()

  useImperativeHandle(ref, () => ({
    setLogDataInfo: data => {
      terminal.current.writeln(data)
    },
  }))

  useEffect(() => {
    terminal.current = new Terminal({
      disableStdin: true,
      theme: {
        background: '#ffffff',
        foreground: '#000000',
        height: '100%',
        fontSize: 14,
      },
    })

    fitAddon.current = new FitAddon()
    terminal.current.loadAddon(fitAddon.current)
    terminal.current.open(term.current)
    fitAddon.current.fit()
  }, [])

  useEffect(() => {
    fitAddon.current.fit()
  }, [props.refresh])

  return (
    <div id="terminal-container" className="output" style={{ height: '100%' }} ref={term}>
      {props.clearAll && (
        <Button
          className="clearBtn"
          type="link"
          onClick={() => {
            terminal.current.clear()
          }}
        >
          清除内容
        </Button>
      )}
    </div>
  )
})

export default CBDESOutput
