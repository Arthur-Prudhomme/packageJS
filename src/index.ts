class Mouche {
    static toutesMouches: Mouche[] = [];
    estPose: boolean;
    constructor() {
        Mouche.toutesMouches.push(this);
        this.estPose = false;
    }

    /**
     * Permet de déposer cette mouche sur le cadav passé en paramètre. Sauvegarde la mouche dans l'objet cadav
     * @param {Cadav} cadav
     * @returns {boolean} est posé ou pas
     */
    pose(cadav: Cadav): boolean {
        if (!(cadav instanceof Cadav)) return false;
        if (cadav.estMouchePosee(this)) return true;
        cadav.mouches.push(this);
        this.estPose = true;
        return true;
    }
}

class Cadav {
    mouches: Mouche[] = [];
    estMouchePosee(mouche: Mouche) {
        return this.mouches.some((m: Mouche) => m === mouche);
    }
}

type MaybeMouche = Mouche | undefined;

class Robot {
    /**
     * Permet de vérifier si la  mouche est posé
     * @param {Mouche} mouche
     * @returns {boolean} vérifie si est posé ou pas
     */
    detek(mouche: Mouche): boolean {
        return mouche.estPose;
    }

    /**
     * Permet de trouver LA mouche dans toutes les mouches
     * @returns {MaybeMouche} mouche quantique
     */
    findMouche(): MaybeMouche {
        return Mouche.toutesMouches.find((mouche: Mouche) => mouche.estPose);
    }

    /**
     * Permet de savoir si un cadav a été touché par une mouche
     * @param {Cadav} cadav
     * @returns {boolean} vérifie si une mouche s'est posé ou pas
     */
    reverseDetek(cadav) { }


    /**
     * Permet de savoir si un cadav a été touché par une mouche
     * @param {number[]} tableau
     * @returns {number} vérifie si une mouche s'est posé ou pas
     */
    calculMoyenne(tableau: number[]) {
        let sum = tableau.reduce((a, b) => a + b, 0);
        return Math.round((sum / tableau.length));
    }
}