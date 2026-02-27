import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/habit-tracker")
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => {
        setHabits(data.habits);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading habits...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Habit Tracker</h1>
      {habits.length === 0 ? (
        <p>No habits found.</p>
      ) : (
        habits.map(habit => (
          <div className="habit-container" key={habit.id}>
            <h3>{habit.name}</h3>
            <p>Goal: {habit.goal}</p>
            <p className={`status ${habit.completedToday ? "status-completed" : "status-pending"}`}>
              {habit.completedToday ? "✅ Completed" : "❌ Not Completed"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;