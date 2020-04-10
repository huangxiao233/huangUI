import React, { Fragment } from 'react'


const classes = (pre: string) => {
    return (name?: string) => {
        return [name, pre].filter(Boolean).join('-')
    }
}
const sc = classes('huangUI')


const Dialog: React.FunctionComponent = (props) => {

    return (
        <Fragment>>
           <div className={sc('mask')}></div>
            <div className="huangUI-content">
                <header className="huangUI-header">提示</header>
                <main className="huangUI-main">123</main>
                <footer className="huangUI-footer"></footer>
            </div>
        </Fragment>
    )
}
export default Dialog