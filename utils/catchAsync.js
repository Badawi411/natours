module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

// (fn) => {
//   return (req, res, next) => {
//     fn(req, res, next).catch(next);
//   };
// };
