import { Router } from 'express'

import { getKey } from './../utils/getKey'

import { checkTicket } from './../utils/captcha'

const key = getKey()

const router = Router()

router.post('/check', async (req, res) => {
    if (!req || !req.body || !req.body.ticket || !req.body.randstr || !req.body.key) {
        return res.send({
            status: 400,
            msg: '参数错误'
        })
    }
    if (req.body.key !== key) {
        return res.send({
            status: 401,
            msg: '鉴权失败'
        })
    }

    const result = await checkTicket(req.body.ticket, req.body.randstr)
    if (result.status === 200) {
        return res.send({
            status: 200,
            msg: result.msg
        })
    }
    return res.send({
        status: result.status,
        msg: result.msg
    })
})

export default router
