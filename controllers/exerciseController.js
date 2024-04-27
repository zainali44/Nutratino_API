import axios from 'axios';

const apiUrl = 'https://wger.de/api/v2/exerciseinfo/'; //

const config = {
    headers: {
      'Authorization': 'Token 3c084d8bb9f9a4de53782ec258528b0d167d4cb3'
    }
  };

   const getExercises = async (req, res) => {
        try {
          const response = await axios.get(apiUrl, config);
          res.send(response.data);
        } catch (error) {
          res.status(500).send(error);
        }
    }

export default { getExercises };