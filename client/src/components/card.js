import "./card.css";

export default function Card(props) {
    let { fileName, fileType } = props;
    return (
        <div className="card">            
            <div className="text-center">
                <img src={`../${fileType}.png`} className="card-img-top image-size" alt={fileType}/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">
                    {fileName}
                </h5>
            </div>
        </div>
    )
}