import React from "react"
import Navbar from "./Navbar"
import Content from "../pages/Content"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Content />
            </main>
        </div>
    )
}

