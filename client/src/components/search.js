import { useState } from "react";
import { useList } from "../contexts/list";

export default function PathBar() {
    const [path, setPath] = useState('');
    let { fetchData } = useList();

    const handleSubmit = async () => {
        fetchData(path);
    }
    return (
        <form className="container">
            <div className="row m-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <input
                        type="text"
                        className="form-control mb-1"
                        id="pathinput"
                        value={path}
                        onChange={(path) => { setPath(path.target.value); }}
                        placeholder="Enter full path" />
                </div>
                <div className="col-lg-4 text-center">
                    <button
                        type="submit"
                        className="btn btn-primary mb-1"
                        onClick={(event) => {event.preventDefault();handleSubmit()}}
                    >
                        Parse Directory
                    </button>
                </div>
            </div>
        </form>
    )
}