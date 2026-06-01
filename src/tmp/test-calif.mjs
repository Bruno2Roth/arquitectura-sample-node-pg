import CalificacionesService from '../services/calificaciones-service.js';

(async () => {
  const svc = new CalificacionesService();
  try {
    const r = await svc.getAllAsync();
    console.log(JSON.stringify(r ? r.slice(0,5) : r, null, 2));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
