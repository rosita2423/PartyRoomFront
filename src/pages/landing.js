import React, { useState, useEffect } from 'react'
import { db } from '../components/API'
import { Navbar } from '../components/Navbar'
import Cookies from 'js-cookie'
import axios from 'axios'

export function Landing() {
    const [data, setData] = useState([]);
    const [session, setSession] = useState(false);
    const [comment, setComment] = useState("");
    /*const [description, setDescription] = useState("")*/

    const getData = async () => {
        const res = await fetch(`${db}/comments`)
        const data = await res.json()
        console.log(data)
        setData(data)
    }

    const checkCookie = (session) => {
        if (session) {
            setSession(true);
        }
    }

    const postComment = async (e) => {
        const data = {
            comment: comment,
            id: parseInt(Cookies.get('Session_Event'))
        }
        try {
            await axios.post(`${db}/scomment`, data)
            console.log("NICE")
        } catch (e) {
            console.log("ERROR")
        }
        getData()
    }

    useEffect(() => {
        const session = Cookies.get("Session_Event");
        checkCookie(session);
        getData();
    }, []);
    return (
        <div className="bg-red-300">
            <section className="mb-40">
                <Navbar />
                <div className="text-center py-12">
                    <img className="w-full h-96" src="https://media.istockphoto.com/id/1199025903/es/vector/felicitaciones-tarjeta-de-felicitaci%C3%B3n-letras-vectoriales.jpg?s=612x612&w=0&k=20&c=6Z5asBYs1uWCJ9k_uWtCyCq3wVMD2t5xUXhIBxNlxG4=" alt="" />
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 pt-20 text-white">Your dreams finally...
                        <br /><span className="text-red-500">CAME TRUE</span>
                    </h1>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-white+">
                        See the opinions for this event
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        {
                            data ? (data.map((item) => (
                                <blockquote className="rounded-lg bg-gray-100 p-8"
                                    key={
                                        item.ID
                                    }>
                                    <div className="flex items-center gap-4">
                                        <img alt="Man" src="/user.png" className="h-16 w-16 rounded-full object-cover" />

                                        <div>
                                            <p className="mt-1 text-lg font-medium text-gray-700 text-center">
                                                {
                                                    item.NAME
                                                } </p>
                                        </div>
                                    </div>

                                    <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 text-center">
                                        {
                                            item.COMMENT
                                        } </p>
                                </blockquote>
                            ))) : null
                        } </div>
                </div>
                {
                    session ? (
                        <div className="isolate bg-white py-24 px-6 sm:py-20 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                                    Let your comment
                                </h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    Create a comment to let people know your opinion of this fantastic event
                                </p>
                            </div>
                            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                            <input name="message" id="message"
                                                rows={4}
                                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={comment}
                                                onChange={
                                                    (e) => setComment(e.target.value)
                                                } />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button onClick={postComment}
                                        className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Save Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null
                } </section>
        </div>
    )
}
