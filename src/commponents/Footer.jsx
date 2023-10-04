import React from 'react'
import { Instagram ,Twitter,Github,Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center justify-center gap-5 py-4 md:py-10 px-4 md:px-36'>
        <div className='flex gap-5 md:gap-8'>
            <a>Tearms of use</a>
            <a>Privacy Pollicy</a>
            <a>About</a>
            <a>Blog</a> 
            <a>FAQ</a>
        </div>
        <div className='text-sm'>
    <h1>Moviex is your ultimate destination for all things movies. Explore in-depth cast details, plot summaries, and behind-the-scenes insights to enhance your movie-watching experience. Whether you're a cinephile or just looking for your next film night pick, Moviex provides a user-friendly platform to satisfy your cinematic cravings. Join our community of movie enthusiasts and stay updated on the latest releases, actor profiles, and captivating movie narratives, all in one place</h1>
        </div>
        <div className='flex flex-row gap-4'>
            <a href="https://www.instagram.com/shiv_parakanatti/">        <Instagram />
</a>
            <a><Twitter /></a>
            <a href="https://github.com/shivuparakanatti/" title="Link to Github Profile"><Github /></a>
            <a href="https://www.linkedin.com/in/shivakumar-parakanatti-90b264230/"><Linkedin /></a>
        
        
        

        </div>
    </div>
  )
}

export default Footer