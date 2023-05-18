import { Slider } from '@mantine/core';
import style from './App.module.scss'

function App() {

  return (
    <>
      <h1 className={style.h1}>Hello World</h1>
      <div className={style.content}>
        <p>foobar</p>
        <div>
          <p>foobar2</p>
        </div>
      </div>
      <Slider className={style.slider} defaultValue={40} />
    </>
  )
}

export default App
