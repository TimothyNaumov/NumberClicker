import { ref, get, update } from "firebase/database";
import { database } from "../Firebase";

export function purchaseRound() {
  const uid = localStorage.getItem("user_uid");
  if (!uid) {
    console.log("ERROR: Invalid UID - score not logged");
    return;
  }

  const db = database;
  const pointsRef = ref(db, `users/${uid}/stats/points`);

  get(pointsRef).then((snapshot) => {
    const updates: any = {};
    updates[`users/${uid}/stats/points`] = snapshot.val() - 10;
    update(ref(db), updates);
  });
}

export async function getUserScore() {
  const uid = localStorage.getItem("user_uid");
  if (!uid) {
    console.log("ERROR: Invalid UID - score not logged");
    return;
  }

  const db = database;
  const pointsRef = ref(db, `users/${uid}/profile/points`);

  const snapshot = await get(pointsRef);
  return snapshot.val();
}

export function getWinRate(stats: any) {
  const wins = stats.frequencyDistribution[10] || 0;
  const winPercentage = (wins / stats.gamesPlayed) * 100;
  return winPercentage.toFixed(2);
}
