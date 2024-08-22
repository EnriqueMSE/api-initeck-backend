
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const AuthDao = require('./authDao');
const JWT_SECRET = process.env.JWT_SECRET;

class AuthController {

    static async login(req, res) {
        const { email, password } = req.body;
        try {
            // Verificar si el usuario existe
            const user = await AuthDao.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
            }
      
            // Verificar la contraseña
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
            }
      
            // Crear el token JWT
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                expiresIn: '1h',
            });
      
            // res.json({ token });
            res.status(200).json({ message: 'Inicio de sesión exitoso', token });

        } catch (error) {
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }

    static async register(req, res) {
        const { email, password } = req.body;          

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }
          
        try {
            // Verificar si el usuario ya existe
            const username = await AuthDao.getUserByEmail(email, password);
            // const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            if (username.length > 0) {
                return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
            }
        
            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);
        
            // Crear el usuario
            await AuthDao.createUser(email, hashedPassword);
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
}

module.exports = AuthController;