import './MixItem.css';
import './VocalItem.css';

export default function GuideItem(props) {
    const title = props.title;
    const group = props.group;
    const cdImage = props.cdImage;

    const handleClick = () => {
        props.setTrigger(true);
    };

    return (
        <div className="vocal-grid" style={{gridTemplateColumns: "92px 47%", marginBottom: "0.8rem"}}>
            <img
                style={{ margin: "0" }}
                className="cd"
                src={cdImage}
                onClick={handleClick} 
                alt=" cover"
            />

            <div>
                <p className="song-text" onClick={handleClick}>{title}</p>
                <p className="group-text">{group}</p>
            </div>
        </div>
    )
}