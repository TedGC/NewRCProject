import classes from './PageContent.module.css'



export default function PageContent({ title, children }) {


    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}