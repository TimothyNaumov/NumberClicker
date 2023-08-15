import { Button } from "@mui/material"
import { database } from "../Firebase";
import { getDatabase, onValue, ref } from "firebase/database";

const StatsDrawer = () => {
    const printStats = async () => {
        // Initialize frequency buckets
        const frequencyBuckets = Array.from({ length: 10 }, () => 0);

        let scoreDistribution = [];
        const db = getDatabase();
        const reference = ref(db, 'scores');
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            // Loop through the keys and populate frequency buckets
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const score = data[key].score;
                    
                    // Increment the corresponding bucket
                    if (score >= 1 && score <= 10) {
                        frequencyBuckets[score - 1]++;
                    }

                    console.log(frequencyBuckets);
                }
            }
        })
    }

    return <Button onClick={printStats}>Send stats to console</Button>
}

export default StatsDrawer;