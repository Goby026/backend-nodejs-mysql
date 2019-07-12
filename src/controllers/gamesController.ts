import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async all (req: Request , res: Response): Promise<void>{

        await pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async get(req: Request , res: Response): Promise<void>{

        await pool.query('SELECT * FROM games WHERE idgames = ?', [req.params.id], function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });

    }

    public async create(req: Request , res: Response): Promise<void>{

        await pool.query('INSERT INTO games SET ?', [req.body], function (error, results, fields) {
            if (error) throw error;
            res.json({status: "game created" , data: results});
        });

    }

    public async update(req: Request , res: Response): Promise<void>{

        const {id} =  req.params;

        await pool.query('UPDATE games SET ? WHERE idgames = ?', [req.body, id], function (error, results, fields) {
            if (error) throw error;
            res.json({status: "game updated" , data: results});
        });
    }

    public async delete(req: Request , res: Response){

        await pool.query('DELETE FROM games WHERE idgames = ?', [req.params.id],function (error, results, fields) {
            if (error) throw error;
            console.log('deleted ' + results.affectedRows + ' rows');
        })
    }

}

export const gamesController = new GamesController();
