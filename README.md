#Game-Api
Express ve MongoDB ile Restful Api
# Games

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/games | `GET` | Empty | List all games. |
| /api/games | `POST` | {'name':'foo', 'type':'fps', 'company':'activison', year:2015 } | Create a new game. |
| /api/games/:game_id | `GET` | Empty | Get a game. |
| /api/games/:game_id | `PUT` | {'name':'foo', 'type':'fps', 'company':'riot', year:2010} | Update a game with new info. |
| /api/games/:game_id | `DELETE` | Empty | Delete a game. |
| /api/games/between/:start_year/:end_year | `GET` | Empty | games between two dates. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /auth | `POST` | { username: 'foo', password:'1234' } | Generate a token. |

will be updated soon...
enjoy!

