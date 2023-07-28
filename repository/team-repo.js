import clinet, { baseDomain } from "./repository"


class GetTeam{
     getTeamData(){
        const endPoint = 'our-team/'
        const dataTeam = clinet
        .get(baseDomain + endPoint)
        .then(ress => {
            return ress
        })
        .catch (err => {
            return err
        })
        return dataTeam

    }
}

export default new GetTeam()