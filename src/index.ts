class Mouche {
    estPose = false;

    /**
     * 
     * @param {Cadav} cadav
     * @returns {boolean} est posé ou pas
     */
    pose(cadav: Cadav): boolean {
        if (!(cadav instanceof Cadav)) return false;
        if (cadav.mouches.some((mouche) => mouche === this)) return true;
        cadav.mouches.push(this);
        return true;
    }
}

class Cadav {
    mouches: Mouche[] = [];
}

class Robot {
    detek(mouche) {}
    reverse_detek(cadav) {}
}