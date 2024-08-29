import { useState } from "react";
import StudentHeader from '../components/StudentHeader'

export default function Postideasform(){
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`call an api`);
  };
    return (
        
        <div className="bg-[#ECE3D4] h-screen">
        <StudentHeader />
            <div className="bg-[#E6D5BC] w-full max-w-md mx-auto p-8  border-[#C7A26B] sm:p-8 border  ">
      <div>
        <div className="text-2xl font-bold pb-2">Submit Your Idea</div>
        <div className="text-center">Share your innovative ideas with us and help shape the future.</div>
      </div>
      <div>
        <form className="grid gap-4 p-2">
          <div className="grid gap-2 pt-4 ">
            <label htmlFor="title" className="font-bold">Title</label>
            <input className="bg-[#ECE3D4] border rounded-md border-[#C7A26B] " id="title" placeholder="Enter a title for your idea" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="idea" className="font-bold">Idea</label>
            <textarea  id="idea" placeholder="Provide more details about your idea" className="min-h-[150px] bg-[#ECE3D4] border rounded-md border-[#C7A26B] " />
          </div>
          <button type="submit" className="w-full bg-[#D5B990] p-3 border rounded-sm border-[#C7A26B]">
            Submit Idea
          </button>
        </form>
      </div>
    </div>
        </div>
    );
}