import {Router} from 'express'; import {listMenu} from '../controllers/menuController.js'; const r=Router(); r.get('/',listMenu); export default r;
