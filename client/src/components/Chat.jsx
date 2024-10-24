import React, { useState } from 'react';
import { IoLogoReddit } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import './chat.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Chat = () => {
    const [query, setQuery] = useState(""); // For capturing the input query
    const [response, setResponse] = useState(""); // For storing the cleaned AI-generated response
    const [copied, setCopied] = useState(false); // To track the copy state

    // Function to handle the search
    const handleSearch = async () => {
        if (!query) {
            alert("Please enter a query!");
            return;
        }

        try {
            // Make the API request to the backend
            const res = await axios.post('http://localhost:3000/api/content', { question: query });
            const cleanedResponse = formatResponse(res.data.result || "No response generated");
            setResponse(cleanedResponse); // Store the formatted response
            setCopied(false); // Reset copied state after fetching a new response
        } catch (error) {
            console.error("Error fetching response: ", error);
            setResponse("Error fetching response");
        }
    };

    // Function to copy the response to the clipboard
    const handleCopy = () => {
        if (response) {
            navigator.clipboard.writeText(response)
                .then(() => setCopied(true))
                .catch(err => console.error("Failed to copy text: ", err));
        }
    };

    // Function to clean and format the response by removing symbols and applying bold tags
    const formatResponse = (text) => {
        // Remove '*' symbols and replace '**bolded text**' with <strong>bolded text</strong>
        return text
            .replace(/\*/g, '') // Remove all asterisks
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Replace **text** with <strong>text</strong>
    };

    return (
        <div className='flex flex-col justify-center items-center'>
           <Link to='/'>
           <div className='flex mt-10'>
                <IoLogoReddit className='text-3xl' />
                <h1 className='logo text-2xl font-bold'>AI-Gpt</h1>
            </div>
           </Link>
            <div className='mt-10 flex'>
                <input 
                    type="text"  
                    className='px-4 py-2 border-black text-sm text-center rounded-lg border w-[500px]' 
                    placeholder='Enter your query here...'
                    value={query} // Bind input value to query state
                    onChange={(e) => setQuery(e.target.value)} // Update query on input change
                />
                <button 
                    className='flex flex-row ml-4 bg-black text-white px-4 py-2 rounded-md text-sm font-bold' 
                    onClick={handleSearch} // Call handleSearch when button is clicked
                >
                    <CiSearch className='text-xl mr-1' /> Search
                </button>
            </div>
            <div className='mt-20 flex flex-col items-center'>
                <h2 className='text-md font-bold'>Generated Answer</h2>
                <button 
                    className={`mt-2 text-md font-bold px-2 py-2 rounded-md flex ${copied ? 'bg-green-500' : 'bg-black'} text-white`} 
                    onClick={handleCopy}
                >
                    <MdContentCopy className='m-1 ' />
                    {copied ? 'Copied!' : 'Copy'}
                </button>
                <div className='text-wrap m-10 w-[1000px] bg-gray-800 text-white px-10 py-5 rounded-xl text-sm'>
                    {/* Use dangerouslySetInnerHTML to render the formatted response with bold text */}
                    <p dangerouslySetInnerHTML={{ __html: response }}></p>
                </div>
            </div>
        </div>
    );
};

export default Chat;
