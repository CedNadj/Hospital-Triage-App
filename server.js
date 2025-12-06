const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('API is running!');
});

app.get('/patients', async (req, res) => {
    const query = `
    SELECT
      p.patient_id,
      p.code,
      p.name,
      p.injury_type,
      p.pain_level,
      p.arrival_time,
      pr.level_name,
      pr.color_code,
      pr.estimated_wait_time
    FROM patient p
    JOIN priorities pr ON p.priority_id = pr.priority_id
    ORDER BY p.arrival_time;
  `;

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Error in /patients:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/patients/:id/history', async (req, res) => {
    const { id } = req.params;

    const query = `
    SELECT
      a.action_id,
      a.action_type,
      a.action_timestamp,
      a.notes,
      op.level_name AS old_level,
      np.level_name AS new_level
    FROM action_logs a
    LEFT JOIN priorities op ON a.old_priority_id = op.priority_id
    LEFT JOIN priorities np ON a.new_priority_id = np.priority_id
    WHERE a.patient_id = $1
    ORDER BY a.action_timestamp DESC;
  `;

    try {
        const result = await pool.query(query, [id]);
        res.json(result.rows);
    } catch (err) {
        console.error('Error in /patients/:id/history:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});