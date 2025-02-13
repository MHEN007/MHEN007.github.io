import { Box, Button } from "@chakra-ui/react"
import { NUM_PROJECTS_PER_PAGE } from "../constants"
import { Project } from "../projects/page"

const PaginationButtons = ({ pageNumber, changeButton, isCurrent } : { pageNumber: number, changeButton: (e: number) => void, isCurrent: boolean }) => {
    return (
        <Button 
            colorScheme={isCurrent ? "pink" : "gray"}
            background={isCurrent ? "#9F2B68" : "gray.400"}
            mx={2}
            onClick={() => changeButton(pageNumber)}>
            {pageNumber}
        </Button>
    )
}

const Pagination = ({ projects, changeButton, currentPage } : { projects: Project[], changeButton: (e: number) => void, currentPage: number }) => {
    const projectLength = projects.length
    const pages = Math.ceil(projectLength / NUM_PROJECTS_PER_PAGE)
    const pageButtons = []

    for (let i = 0; i < pages; i++) {
        pageButtons.push(
            <PaginationButtons 
                key={i} 
                pageNumber={i+1} 
                changeButton={changeButton} 
                isCurrent={currentPage === i+1} 
            />
        )
    }

    return (
        <Box justifyContent={"center"} py={5} flexDirection={"row"} display={"flex"}>
            {pageButtons}
        </Box> 
    )
}

export default Pagination