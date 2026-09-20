export function Toast({message}:{message:string}){
    return (
        <div className={`toast ${message?'show':''}`} role="status">
            {message}
        </div>
    )
}
