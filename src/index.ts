export class Mouche {
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

export class Cadav {
	mouches: Mouche[] = [];
	estMouchePosee(mouche: Mouche) {
		return this.mouches.some((m: Mouche) => m === mouche);
	}
}

type MaybeMouche = Mouche | undefined;

export class Robot {
	detek(mouche: Mouche): boolean {
		return mouche.estPose;
	}
	findMouche(): MaybeMouche {
		return Mouche.toutesMouches.find((mouche: Mouche) => mouche.estPose);
	}
	reverseDetek(cadav) {}
}
