import Navigation from "./nav";
// wrapping nav component into server component to export it to layout.tsx so that it is available
// everywhere.


export default function ServerNav(){
    return(
        <span>

            <Navigation></Navigation>

        </span>
    )
}