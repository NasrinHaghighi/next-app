export default function handler(req, res) {
    res.status(200).json({post:req.query.postId  })
  }