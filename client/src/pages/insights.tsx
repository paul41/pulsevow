import { useParams } from "react-router-dom";

const EventInsightPage = () => {
    const { storyId } = useParams<{ storyId: string }>();

    return (
        <div>
            <h1>Pulse Insight</h1>

            {storyId && (
                <p>Loading intelligence for story: {storyId}</p>
            )}
        </div>
    );
};

export default EventInsightPage;