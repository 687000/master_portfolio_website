const projectsData = [
	{
		id: 1,
		title: "Web 101",
		description: "A web development study materials archive app",
		image: "http://via.placeholder.com/100x100",
		prototype: "prototype",
		demo: "",
		details: "detailpage",
	},
	{
		id: 2,
		title: "French Revolution and Neoclassical Arts",
		description: "An interactive timeline",
		image: "http://via.placeholder.com/100x100",
		prototype: "",
		demo: "demo",
		details: "detailpage",
	},
	{
		id: 3,
		title: "GoodReads Redesign",
		description: "A redesign project",
		image: "http://via.placeholder.com/100x100",
		prototype: "prototype",
		demo: "",
		details: "detailpage",
	},
	{
		id: 4,
		title: "All For Hamsters",
		description: "An e-commerce website using PHP and MySQL",
		image: "http://via.placeholder.com/100x100",
		prototype: "",
		demo: "demo",
		details: "detailpage",
	},
	{
		id: 5,
		title: "React Jira Clone",
		description: "A React task management web app",
		image: "http://via.placeholder.com/100x100",
		prototype: "",
		demo: "demo",
		details: "detailpage",
	},
	{
		id: 6,
		title: "React E-Commerce",
		description: "A React shopping website",
		image: "http://via.placeholder.com/100x100",
		prototype: "",
		demo: "demo",
		details: "detailpage",
	},
	{
		id: 7,
		title: "Internship",
		description: "Ruby on Rails web development and Wordpress design",
		image: "http://via.placeholder.com/100x100",
		prototype: "",
		demo: "",
		details: "detailpage",
	}
];

document.addEventListener("DOMContentLoaded", function (event) {
	monitorAnimationExpericenCard();
	// Only add projects if in archive/projects page
	if (detactCurrentFile("archive.html")) {
		addProjectCard();
	}
	document.addEventListener("scroll", function (event) {
		monitorAnimationExpericenCard();
	});

});
function monitorAnimationExpericenCard() {
	const experienceCards = document.getElementsByClassName("experience-card");
	Array.prototype.forEach.call(experienceCards, (experienceCard) => {
		const experienceCardOffsetTop = experienceCard.offsetTop;
		if (window.innerHeight + window.scrollY >= experienceCardOffsetTop) {
			experienceCard.classList.add("fade-in-left");
		}
	});
}
function detactCurrentFile(target) {
	const path = window.location.pathname;
	const lastSlashIndex = path.lastIndexOf("/");
	const filename = path.substring(lastSlashIndex + 1);
	return (filename.includes(target));
}
function addProjectCard() {
	const projectsList = document.getElementById("projects-list");
	projectsData.forEach((projectData, index) => {
		setTimeout(() => {
			const projectCard = document.createElement("div");
			projectCard.classList.add("col-md-4");
			projectCard.classList.add("col-sm-12");
			projectCard.classList.add("fade-in-left");
			if (projectData.prototype) {
				projectCard.innerHTML = `
				<div class="project-card">
					<div class="d-flex flex-column">
						<a href="${projectData.details}"><div class="project-thumb"><img src="${projectData.image}" alt="${projectData.title}"></div></a>
						<div class="project-intro pr-3 pl-3">
						<a href="${projectData.details}"><h4>${projectData.title}</h4></a>
							<p class="font-weight-light pt-1 pb-1">${projectData.description}</p>
							<div class="links serif"><a class="pr-4" href="${projectData.prototype}" target="_blank">Prototype</a><a href="${projectData.details}" class="pr-4">Details</a></div>
						</div>
					</div>
				</div>
			  `;
			}
			else if (projectData.demo) {
				projectCard.innerHTML = `
				<div class="project-card">
					<div class="d-flex flex-column">
					<a href="${projectData.details}"><div class="project-thumb"><img src="${projectData.image}" alt="${projectData.title}"></div></a>
						<div class="project-intro pr-3 pl-3">
						<a href="${projectData.details}"><h4>${projectData.title}</h4></a>
							<p class="font-weight-light pt-1 pb-1">${projectData.description}</p>
							<div class="links serif"><a class="pr-4" href="${projectData.demo}" target="_blank">Demo Website</a><a href="${projectData.details}" class="pr-4">Details</a></div>
						</div>
					</div>
				</div>
			  `;
			} else {
				projectCard.innerHTML = `
				<div class="project-card">
					<div class="d-flex flex-column">
					<a href="${projectData.details}"><div class="project-thumb"><img src="${projectData.image}" alt="${projectData.title}"></div></a>
						<div class="project-intro pr-3 pl-3">
						<a href="${projectData.details}"><h4>${projectData.title}</h4></a>
							<p class="font-weight-light pt-1 pb-1">${projectData.description}</p>
							<div class="links serif"><a href="${projectData.details}" class="pr-4">Details</a></div>
						</div>
					</div>
				</div>
			  `;
			}
			projectsList.appendChild(projectCard);
		}, index * 400);
	});
}