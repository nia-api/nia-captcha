import yaml from 'yaml'
import { useDataFile } from './../../../hooks/useDataFile'

const { getFile } = useDataFile('nia-captcha')

interface Config {
    key: string
}

export const getKey = () => {
    const config: Config = yaml.parse(
        getFile(
            './config.yaml',
            yaml.stringify({
                key: '114514'
            })
        )
    )
    return config.key as string
}
